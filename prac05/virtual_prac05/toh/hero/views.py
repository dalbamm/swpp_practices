from django.http import HttpResponse

def index(request):
	return HttpResponse('Hello, world!')

def id(request, num):
	return HttpResponse('Your id is {}'.format(num))
def namename(request, namestr):
	return HttpResponse('Your name is '+namestr)
