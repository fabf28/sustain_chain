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
    def __init__(self, path):
        self.df = pd.read_csv(path)

    #format dataset
    def create_time_diff(self, param1, param2, diff):
        self.df[diff] = (pd.to_datetime(self.df[param1]) - pd.to_datetime(self.df[param2])).dt.days
        print(self.df)
    
    #create late and not late
    def late_delivery_analysis(self, param1, param2, label1, label2):
        total = self.df[param1]
        late = len([x for x in self.df[param1] if x > 0])
        percent1 = round(late/total * 100, 2)

        total2 = self.df[param2]
        late2 = len([x for x in self.df[param1] if x > 0])
        percent2 = round(late2/total2 * 100, 2)
        
        text = f"{percent1}% of {label1} made delivery's late while {percent2}% of {label2} made delivery's late."
        return text

    #create scatter plot
    def create_scatter_plot(self, param1, param2, xlabel, ylabel, title, filename):
        self.df.plot.scatter(x=param1, y=param2)
        plt.title(title)
        plt.xlabel(xlabel)
        plt.ylabel(ylabel)
        plt.savefig(f"ml/imgs/{filename}.png")
        #plt.show()

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
        #plt.show()

        return embed_image(filename)


    #create box plots
    def create_box_plots(self, param1, param2, xlabel, ylabel, filename):
        print(self.df)
        self.df.boxplot(column=param2, by=param1)
        plt.xlabel(xlabel)
        plt.ylabel(ylabel)
        plt.savefig(f"ml/imgs/{filename}.png")
        #plt.show()

        return embed_image(filename)

    

    def avg_times(self, param):
        avg = sum(self.df[param]) / len(self.df[param])
        return avg
    
    


    #create_time_diff("ActualShipDate", "CreationDate","ProcessingTime")
    #create_box_plots("ModeOfTransportCode", "Quantity", "Mode of Transport", "Quantity", "boxes")

    #create pie chart

    #analyze graph with openai
