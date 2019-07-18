import os
from random import randint

files = []
words = "quantity marine biography sign element course physical grounds banish road station field catch gallon betray landowner prevalence freshman veil light youth arrow liberal amputate plug pedestrian occasion bat cry paragraph wind extraterrestrial claim tactic assault impound bless corn refund microphone bucket snack format hot work matter reckless place forum announcement decade bride strikebreaker valid forge"
wordss = words.split()

files = os.listdir("./public/img")
outfile = open("trialdata.js", "w+")
outfile.write("export const storeProducts = [")
counter = 0
l = ["GOOGLE", "SAMSUNG", "HTC", "HUAWEI", "APPLE"]
print(l)

for f, word in zip(files, wordss):
    r = randint(1000, 9990) / 100
    outfile.write("{ id: " + repr(counter) +", title: \" "  + word + repr(counter) + "\", img: \"img/" + f+ "\", price: "+ repr(r) +
                  ", company: \"" + l[counter%5] +"\", info: \" Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hel    la blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi org    anic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.\"," +
                  "inCart: false," + "count: 0, " + "total: 0 },")
    counter += 1

outfile.write("]")
outfile.write("\n")

    
print("Hello")
outfile.write("export const detailProduct = { id: 1, title: \"Google Pixel - Black\", img: \"img/product-1.png\", price: 10, company: \"google\", info: \"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.\", inCart: false, count: 0, total: 0 }; ")
