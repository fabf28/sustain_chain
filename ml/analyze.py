import pandas as pd
import matplotlib
matplotlib.use("TkAgg")
import matplotlib.pyplot as plt


df = pd.read_csv('ml/data/scm.csv')

#format dataset
def create_time_diff(param1, param2, diff):
    df[diff] = (pd.to_datetime(df[param1]) - pd.to_datetime(df[param2])).dt.days
    print(df)

#create scatter plot
def create_scatter_plot(param1, param2, xlabel, ylabel, title, filename):
    df.plot.scatter(x=param1, y=param2)
    plt.title(title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.savefig(f"ml/imgs/{filename}.png")
    plt.show()

#create bar graph
def create_bar_chart(param, xlabel, ylabel, title, filename, topic):
    df.plot.bar(x=param)
    frequency_counts = df[param].value_counts()
    frequency_counts.plot(kind='bar').get_legend().remove()
    plt.title(f'Frequency of {topic}')
    plt.title(title)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.savefig(f"ml/imgs/{filename}.png")
    plt.show()

#create box plots
def create_box_plots(param1, param2, xlabel, ylabel, filename):
    print(df)
    df.boxplot(column=param2, by=param1)
    plt.xlabel(xlabel)
    plt.ylabel(ylabel)
    plt.savefig(f"ml/imgs/{filename}.png")
    plt.show()

#create_time_diff("ActualShipDate", "CreationDate","ProcessingTime")
#create_box_plots("ModeOfTransportCode", "Quantity", "Mode of Transport", "Quantity", "boxes")

#create pie chart



create_bar_chart("ModeOfTransportCode", "Modes", "Numbers", "bar", "All the Modes of Transport", "Transport")


#analyze graph with openai
