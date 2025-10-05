import pandas as pd
import matplotlib
matplotlib.use("TkAgg")
import matplotlib.pyplot as plt


df = pd.read_csv('ml/data/scm.csv')

#format dataset

#create scatter plot
def create_scatter_plot(param1, param2, xlabel, ylabel, title, filename):
    df.plot.scatter(x=param1, y=param2)
    plt.title(title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.savefig(f"ml/imgs/{filename}.png")
    plt.show()

#create bar graph
def create_bar_chart(param, xlabel, ylabel, title, filename):
    df.plot.bar(x=param)
    plt.title(title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.savefig(f"ml/imgs/{filename}.png")
    plt.show()

def create_pie_chart(param, xlabel, ylabel, title, filename):
    


create_scatter_plot("Quantity", "UnitPrice","Quantity", "UnitPrice", "scatter", "Quantity vs Unit Price")
create_bar_chart("ModeOfTransportCode", "Modes", "Numbers", "bar", "All the Modes of Transport")


#analyze graph with openai
