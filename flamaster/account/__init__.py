from flask import Blueprint


account = Blueprint('account', __name__, template_folder='templates',
                    url_prefix='/account')

from views import *
from api import *
