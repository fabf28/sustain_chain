from fastapi import FastAPI
import pandas as pd
from analysis import DataF
import json

@app.post("/insights/")
def get_insights(csv_file: str):
    # Load data
    analyze = DataF(csv_file)
    
    # Preprocess data
    analyze.create_time_diff("CreationDate", "ActualShipDate", "ProcessingTime")
    analyze.create_time_diff("PromisedDeliveryDate", "Arrival", "DeliveryTime")

    # Build insights
    insights = {
        "modeOfTransport": {
            "modeDistribution": analyze.create_bar_chart("ModeOfTransportCode", "Modes of Transportation", "Frequency", "Frequency of Mode of Transportation", "modeDistr", "Modes of Transportation"),
            "mostEmmission": "Removing high-emission transport modes like air and road significantly decreases greenhouse gas output, as these methods consume the most fuel per tonne-kilometer. Shifting freight to rail and sea transport not only reduces carbon emissions but also enhances sustainability by promoting energy efficiency and cleaner logistics.", 
        },
        "deliveryTime": {
            "deliveryTime_vs_mode": analyze.create_box_plots("ModeOfTransportCode", "DeliveryTime", "Modes of Transportation", "Time Taken to Deliver (days)", "dt_vs_mode"),
            "deliveryTime_vs_carrier": analyze.create_box_plots("Carrier", "DeliveryTime", "Carriers", "Time Taken to Deliver (days)", "dt_vs_carrier"),
            "deliveryTime_average": f"The average delivery delay was {round(analyze.avg_times('DeliveryTime'), 2)}"
        },
        "processingTime": {
            "processingTime_vs_supplierName": analyze.create_box_plots("SupplierName", "ProcessingTime", "SupplierName", "Time Taken to Deliver (days)", "pt_vs_supplierName"),
            "processingTime_vs_supplierType": analyze.create_box_plots("SupplierTypeCode", "ProcessingTime", "SupplierTypeCode", "Time Taken to Deliver (days)", "pt_vs_supplierType"),
            "processingTime_average": f"The average processing delay was {round(analyze.avg_times('ProcessingTime'), 2)}",
            "pt_and_dt_analysis": analyze.late_delivery_analysis("DeliveryTime", "ProcessingTime", "delivery delays", "processing delays"),
            "why_pt_and_dt": "We analyze delays and factors contributing to them because they have the potential to decrease customer satisfaction."
        }
    }

    return insights


print(get_insights("ml/data/scm.csv"))
