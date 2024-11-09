import sys
from flask import Flask, render_template, url_for, flash, session, request, redirect

    

#application init and configurations
app = Flask(__name__)
app.secret_key = sys.argv[1]




@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/')
def index():
    return render_template('home.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404



if __name__ == '__main__':
    app.run(debug=True)