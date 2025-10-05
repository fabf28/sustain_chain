from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SCM(BaseModel):
    CurrencyCode: str
    POLineId: str
    LineNumber: int
    ItemId: str
    ItemDescription: str	
    CategoryName: str	
    Quantity: int	
    UOM: str
    UnitPrice: float	
    LineAmount: int
    Carrier: str	
    ModeOfTransportCode: str

@app.post("/insights/")
def get_insights(scm_data: SCM):
    #run ml controllers and organize insights
    insights = {}
    return insights
