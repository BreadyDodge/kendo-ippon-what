#add a default value: any
#add more questions: waza
#still working on this one

from collections import defaultdict
import csv

kendo_ippon = []
with open("70th mens AJKC.csv",'r',encoding='utf-8-sig') as file:
    excelfile = csv.reader(file)
    kendo_ippon = list(excelfile)

search = input("What do you want to see? ")
names = defaultdict(int)
categories = kendo_ippon.pop(0)
for match in kendo_ippon:
  if match[categories.index("Target")] == search:
    if match[categories.index("Point_awarded_to")] == "White":
        names[match[categories.index("Competitor_White")]] += 1
    elif match[categories.index("Point_awarded_to")] == "Red":
        names[match[categories.index("Competitor_Red")]] += 1

winner = max(names, key=names.get)
print(f'The fighter with the most amount of {search} is {winner} with {names[winner]} points scored')