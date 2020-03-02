from flask import Flask, render_template, url_for, flash, session, request, redirect
from wtforms import Form, StringField, PasswordField, TextAreaField, SubmitField, validators
from flask_sqlalchemy import SQLAlchemy
from passlib.hash import pbkdf2_sha256
from datetime import datetime

    

#application init and configurations
app = Flask(__name__)
app.secret_key = 'lamePass1234'  #TODO - change to environment variable
#app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://Blogz:Blogz1234D!@localhost:3306/blogz"  
#app.config['SQLALCHEMY_ECHO'] = True

#initialize instance of db
#db = SQLAlchemy(app)


#___________________ROUTES_____________________
#home - landing page route
@app.route('/home')
def home():
    #blog = Blog.query.order_by(Blog.pub_date.desc()).all()
    return render_template('home.html', title='JohnDurham.dev')



#<<<-------------------------------------------------------->>>
if __name__ == '__main__':
    app.run(debug=True)