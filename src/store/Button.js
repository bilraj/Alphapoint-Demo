import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4 rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--two)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--two)"};
border-radius: 0.5rem;
padding: 0.3rem 1.2rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.3s ease-in-out;
&:hover{
  background: var(--five);
  color: var(--two);
  border: none;
}
&:focus{
  outline:none;
}
` 

// export const ButtonContainer = styled.button`
// text-transform: capitalize;
// font-size: 1.4 rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--two)"};
// color: ${props => props.cart ? "var(--mainYellow)" : "var(--two)"};
// border-radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// cursor: pointer;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition:all 0.2s ease-in-out;
// &:hover{
//   background: ${props => props.cart ? "var(--mainYellow)" : "var(--five)"};
//   color: var(--two);
//   border: none;
// }
// &:focus{
//   outline:none;
// }
// ` 