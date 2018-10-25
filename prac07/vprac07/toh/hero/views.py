from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	if 'visit_count' not in request.session:
		request.session['visit_count'] = 1
	else:
		request.session['visit_count'] += 1

	return HttpResponse('Hello, world! You visited {} times.\n'.format(request.session['visit_count']))

def id(request, num):
	return HttpResponse('Your id is {}'.format(num))
def namename(request, namestr):
	return HttpResponse('Your name is '+namestr)
