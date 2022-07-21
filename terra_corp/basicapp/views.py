from django.shortcuts import render
from basicapp.forms import Carrer_form

def index(request):
    return render(request, 'basicapp/index.html')

def carrers(request):

    form = Carrer_form()

    if request.method == 'POST':
        form = Carrer_form(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("Error form invalid")

    return render(request, 'basicapp/carrers.html', {'form':form})

def about_me(request):
    return render(request, 'basicapp/about_me.html')

def essay(request):
    return render(request, 'basicapp/essay.html')

def donate(request):
    return render(request, 'basicapp/donate.html')
