import pickle
import os
import pandas as pd


def pred(ob):
    d1 = ob.to_dict()
    df = pd.DataFrame(d1, index=[0])
    df.drop('Survived', axis='columns', inplace=True)
    
    pkl_filename = './pickle_model.pkl'
    pkl_filename = os.path.join(os.path.abspath(os.path.dirname(__file__)),
                                pkl_filename)
    with open(pkl_filename, 'rb')as file:
        model = pickle.load(file)
    pred = model.predict(df)
    return pred