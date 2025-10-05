from fastapi import FastAPI
from pydantic import BaseModel
import json
from analysis import DataF 
import pandas as pd

app = FastAPI()

@app.post("/insights/")
def get_insights(csv_file):
    #input data
    df = pd.read_csv(csv_file)
    analyze = DataF(df)
    

    #preprocess data
    analyze.create_time_diff("CreationDate", "ActualShipDate", "ProcessingDate")
    analyze.create_time_diff("CreationDate", "ActualShipDate", "ProcessingDate")

    #run ml controllers and organize insights
    insights = {
        "modeOfTransport": {
            "modeDistribution": analyze.create_bar_chart("ModeOfTransportCode", "Modes of Transportation", "Frequency", "Frequency of Mode of Transportation", "modeDistr"), #bar chart
            "mostEmmission": "llm sentence", 
            "increaseEfficiency": "llm sentence"
        },
        "deliveryTime": {
            "deliveryTime_vs_mode": analyze.create_box_plots("ModeOfTransportCode", "DeliveryTime", "Modes of Transportation", "Time Taken to Deliver (days)", "dt_vs_mode"), #box plot
            "deliveryTime_vs_carrier": analyze.create_box_plots("Carrier", "DeliveryTime", "Carriers", "Time Taken to Deliver (days)", "dt_vs_carrier"), #box plot
            "deliveryTime_average": "llm sendtence with stat input"
        },
        "processingTime": {
            "processingTime_vs_supplierName": analyze.create_box_plots("SupplierName", "ProcessingTime", "SupplierName", "Time Taken to Deliver (days)", "dt_vs_carrier"), #box plot
            "processingTime_vs_supplierType": analyze.create_box_plots("SupplierTypeCode", "ProcessingTime", "SupplierTypeCode", "Time Taken to Deliver (days)", "dt_vs_carrier"), #box plot
            "processingTime_vs_deliveryTime": "pie_chart", #pie chart
            "processingTime_average": "llm sentence with stat input",
            "why_pt_and_dt": "general llm print sentence"
        }
    }
    return insights
