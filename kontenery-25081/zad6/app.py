import requests
import pandas as pd
import plotly.express as px

def generate_chart():
    url = "http://api.nbp.pl/api/exchangerates/rates/a/eur/last/30/?format=json"
    data = requests.get(url).json()
    
    df = pd.DataFrame(data['rates'])
    
    fig = px.line(df, x='effectiveDate', y='mid', 
                  title='Kurs Euro (EUR/PLN) - Ostatnie 30 dni',
                  labels={'effectiveDate': 'Data', 'mid': 'Kurs (PLN)'})
    
    fig.write_html("index.html")

if __name__ == "__main__":
    generate_chart()
    print("Wykres wygenerowany pomyślnie!")