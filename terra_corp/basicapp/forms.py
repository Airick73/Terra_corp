from django import forms
from basicapp.models import Carrers

class Carrer_form(forms.ModelForm):
    #validators go here
    class Meta:
        model = Carrers
        fields = '__all__'
    # message = forms.CharField(widget=forms.Textarea)
