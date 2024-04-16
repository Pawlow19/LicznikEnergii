#Prosty program do generowania danych predykowanaych na podstawie danych z data.json
import json
import random

# Wczytanie danych z data.json
with open('data.json', 'r') as file:
    data = json.load(file)

# Prosta predykcja dla danych dziennych
last_day = data['day']
predicted_day = [max(0, int(avg + random.uniform(-5, 5))) for avg in last_day]

# Prosta predykcja dla danych tygodniowych
last_week = data['week']
predicted_week = [max(0, int(avg + random.uniform(-25, 25))) for avg in last_week]

# Prosta predykcja dla danych miesięcznych
last_month = data['month']
predicted_month = [max(0, int(avg + random.uniform(-25, 25))) for avg in last_month]

# Prosta predykcja dla danych rocznych
last_year = data['year']
predicted_year = [max(0, int(avg + random.uniform(-200, 200))) for avg in last_year]

# Aktualizacja danych w data
data['day'] = predicted_day
data['week'] = predicted_week
data['month'] = predicted_month
data['year'] = predicted_year

# Zapis danych do dataPredicted.json
with open('dataPredicted.json', 'w') as file:
    json.dump(data, file, indent=2)
