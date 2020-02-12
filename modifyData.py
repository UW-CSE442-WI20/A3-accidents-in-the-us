import pandas as pd

# Getting a certain state
'''data = pd.read_csv("data/US_Accidents_Dec19.csv")
data = data.loc[data['State'] == "WA"]
data.to_csv("WA_Accidents.csv")'''

# Generalizing Time
'''def change_date_and_time_to_time(string):
    hour, minute, second = string.split(" ")[1].split(":")
    if int(minute) >= 30:
        hour = (int(hour) + 1) % 24
    return hour


data = pd.read_csv("data/WA_Accidents.csv")
times = []
for index, row in data.iterrows():
    times.append(change_date_and_time_to_time(row['Start_Time']))

data['General_Time'] = times
data.to_csv("test_time.csv")'''

'''data = pd.read_csv("data/test_time.csv")
lats = []
longs = []
for index, row in data.iterrows():
    lats.append(round(float(row['Start_Lat']), 1))
    longs.append(round(float(row['Start_Lng']), 1))


data['General_Lat'] = lats
data['General_Lng'] = longs
data.to_csv("general_cords.csv")'''

def myround(x, base=5):
    return base * round(x/base)

data = pd.read_csv("data/WA_Core_Info.csv")
data = data.dropna(subset=['General_Tmp'])

temps = []
for index, row in data.iterrows():
    temps.append(myround(float(row['General_Tmp'])))


data['Temperature'] = temps
data = data[['Severity', 'Temperature', 'General_Time', 'General_Lat' ,'General_Lng']]
data.to_csv("WA.csv")