import fileinput

words = [
	"quantity"
"marine"
"biography"
"sign"
"element"
"course
"physical
"grounds"
"banish"
"road"
"station"
"field"
"catch"
gallon
betray
landowner
prevalence
freshman
veil
light
youth
arrow
liberal
amputate
plug
pedestrian
occasion
bat
cry
paragraph
wind
extraterrestrial
claim
tactic
assault
impound
bless
corn
refund
microphone
bucket
snack
format
hot
work
matter
reckless
place
forum
announcement
decade
bride
strikebreaker
valid
forge
]

with fileinput.FileInput("trialdata.js", inplace=True, backup='.bak') as file:
    for line, word in zip(file, words):
        print(line.replace("Phone", replacement_text), end='')