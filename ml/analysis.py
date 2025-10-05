import pandas as pd
import matplotlib
matplotlib.use("TkAgg")
import matplotlib.pyplot as plt
import base64


#embed image
def embed_image(filename):
    # read your image
    with open(f"ml/imgs/{filename}.png", "rb") as f:
        img_bytes = f.read()

    # encode to base64
    img_b64 = base64.b64encode(img_bytes).decode("utf-8")
    return img_b64

class DataF:
    def _init_(self):
        self.df = pd.read_csv('ml/data/scm.csv')

    #format dataset
    def create_time_diff(self, param1, param2, diff):
        self.df[diff] = (pd.to_datetime(self.df[param1]) - pd.to_datetime(self.df[param2])).dt.days
        print(self.df)

    #create scatter plot
    def create_scatter_plot(self, param1, param2, xlabel, ylabel, title, filename):
        self.df.plot.scatter(x=param1, y=param2)
        plt.title(title)
        plt.xlabel(xlabel)
        plt.ylabel(ylabel)
        plt.savefig(f"ml/imgs/{filename}.png")
        plt.show()

        return embed_image(filename)

    #create bar graph
    def create_bar_chart(self, param, xlabel, ylabel, title, filename, topic):
        self.df.plot.bar(x=param)
        frequency_counts = self.df[param].value_counts()
        frequency_counts.plot(kind='bar').get_legend().remove()
        plt.title(f'Frequency of {topic}')
        plt.title(title)
        plt.xlabel(xlabel)
        plt.ylabel(ylabel)
        plt.savefig(f"ml/imgs/{filename}.png")
        plt.show()

        return embed_image(filename)

    #create box plots
    def create_box_plots(self, param1, param2, xlabel, ylabel, filename):
        print(self.df)
        self.df.boxplot(column=param2, by=param1)
        plt.xlabel(xlabel)
        plt.ylabel(ylabel)
        plt.savefig(f"ml/imgs/{filename}.png")
        plt.show()

        return embed_image(filename)

    #create_time_diff("ActualShipDate", "CreationDate","ProcessingTime")
    #create_box_plots("ModeOfTransportCode", "Quantity", "Mode of Transport", "Quantity", "boxes")

    #create pie chart


    create_bar_chart("ModeOfTransportCode", "Modes", "Numbers", "bar", "All the Modes of Transport", "Transport")


    #analyze graph with openai
