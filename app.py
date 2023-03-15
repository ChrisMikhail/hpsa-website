from flask import Flask, render_template, request
from flask_mail import Mail, Message
import config
import os

app = Flask(__name__, template_folder=".")


app.config['MAIL_SERVER'] = config.MAIL_SERVER
app.config['MAIL_PORT'] = config.MAIL_PORT
app.config['MAIL_USERNAME'] = config.MAIL_USERNAME
app.config['MAIL_PASSWORD'] = config.MAIL_PASSWORD
app.config['MAIL_USE_TLS'] = config.MAIL_USE_TLS
app.config['MAIL_USE_SSL'] = config.MAIL_USE_SSL

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/team')
def team():
    return render_template("team.html")



mail = Mail(app)

@app.route('/submit-email', methods=['POST'])
def submit_email():
    email = request.form['email']
    msg = Message('New Form Submission', sender='samuelmikhc@gmail.com', recipients=['Akshay2334@hotmail.com'])
    msg.body = f"New Email: {email}"
    mail.send(msg)
    return ('', 204)

    

if __name__ == '__main__':
    app.run(debug=True)