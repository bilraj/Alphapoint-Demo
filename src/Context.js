import React, { Component } from 'react';
import { storeProducts, detailProduct } from './trialdata.js';

const ProductContext = React.createContext();
// Provider - Provides info for our application
// Consumer - Uses info that provider gives


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
        console.log("CART");
        console.log(this.state.cart);
        // this.setState(()=> {
        //     return {
        //         cart: JSON.parse(localStorage.getItem('cart'))
        //     }
        // })
        console.log("AFTER")
        console.log(this.state.cart);

        this.hydrateWithLocalStorage();
    }

    componentWillUnmount() {
        console.log("UNMOUNTING")
        // localStorage.setItem("cart", JSON.stringify(this.state.cart));
        // localStorage.setItem("cartSubtotal", JSON.stringify(this.state.cartSubtotal));
        // localStorage.setItem("cartTax", JSON.stringify(this.state.cartTax));
        // localStorage.setItem("cartTotal", JSON.stringify(this.state.cartTotal));
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }


    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        });
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));

        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {
            this.addTotals();
            console.log("STATE OF CART")
            console.log(this.state.cart);
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        });
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        })
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, () => {
            this.addTotals();
        });

    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count -= 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {

        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(product =>
            id != product.id
        );

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return { cart: [...tempCart], products: tempProducts };
        }, () => {
            this.addTotals();
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        });
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts();
            this.addTotals();
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal += item.total;
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = parseFloat((subTotal + tax).toFixed(2));
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        }, () => {
            localStorage.setItem('cartSubTotal', JSON.stringify(this.state.cartSubtotal));
            localStorage.setItem('cartTax', JSON.stringify(this.state.cartTax));
            localStorage.setItem('cartTotal', JSON.stringify(this.state.cartTotal));
        });
    }

    hydrateWithLocalStorage() {
        console.log("HYDRATING")
        // For all keys
        for (let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                var value = localStorage.getItem(key);
                console.log("Key: " + key)

                try {
                    value = JSON.parse(value);
                    this.setState(() => { return { key: value } });

                    console.log(`ADDING TO ${key}: ` + value)
                } catch {
                    alert("CAUGHT")
                    this.setState(() => { return { key: value } });
                }
            }
        }
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };