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


#<<<<<------------------------Models----------------------->>>>>
#user model
'''
class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30))
    email = db.Column(db.String(120))
    password = db.Column(db.String(120))
    #init a user
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
    #reppin again....
    def __repr__(self):
        return self.username


#blog model
class Blog(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    body = db.Column(db.Text)
    pub_date = db.Column(db.DateTime, nullable=False,
        default=datetime.utcnow)
    user_name = db.Column(db.String(30))
    #init a post
    def __init__(self, title, body, user_name):
        self.title = title
        self.body = body
        self.user_name = user_name
    #reppin again....
    def __repr__(self):
        return (self.title, self.body)


#<<<<------------------------Forms--------------------->>>>
#Registration form
class RegistrationForm(Form): 
    username = StringField('Username', [validators.Length(min=6, max=30), validators.DataRequired()])
    email = StringField('Email', [validators.Length(max=120), validators.DataRequired()])
    password = PasswordField('Password', [validators.Length(min=7), validators.DataRequired()])
    verify = PasswordField('Verify Password', [validators.DataRequired()])
    submit = SubmitField('Submit')


#Login form
class LoginForm(Form): 
    username = StringField('Username', [validators.Length(min=6, max=30), validators.DataRequired()])
    password = PasswordField('Password', [validators.Length(min=7), validators.DataRequired()])
    submit = SubmitField('Submit')


#create a blog form
class BlogForm(Form):
    title = StringField('Title', [validators.Length(min=6, max=120)])
    body = TextAreaField('Body', [validators.Length(min=20)])

'''


#<<<<<--------------------------Routes------------------------>>>>>
@app.route('/')
def index():
    return render_template('home.html', title="JohnDurham.dev")


@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html', title="JohnDurham.dev - Hobbies")


@app.route('/projects', methods=['GET', 'POST'])
def projects():
    return render_template('projects.html', title="JohnDurham.dev - Projects")


@app.route('/readproject')
def readproject():
    return render_template('readprojects.html', title="JohnDurham.dev - ")


@app.route('/login')
def login():
    return render_template('login.html', title="Private Login")



if __name__ == '__main__':
    app.run(debug=True)