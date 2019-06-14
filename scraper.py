import os
from random import randint

files = []

files = os.listdir("./public/img")
outfile = open("trialdata.js", "w+")
outfile.write("export const storeProducts = [")
counter = 0
l = ["GOOGLE", "SAMSUNG", "HTC", "HUAWEI", "APPLE"]
print(l)

for f in files:
    r = randint(1000, 9990) / 100
    outfile.write("{ id: " + repr(counter) +", title: \"Phone " + repr(counter) + "\", img: \"img/" + f+ "\", price: "+ repr(r) +
                  ", company: \"" + l[counter%5] +"\", info: \" Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hel    la blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi org    anic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.\"," +
                  "inCart: false," + "count: 0, " + "total: 0 },")
    counter += 1
