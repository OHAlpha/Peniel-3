us = Contact::Country.where( alpha_2: 'US' ).first

md = Contact::UsState.where( name: 'Maryland' ).first

balt = Contact::UsCity.create name: 'Baltimore', us_state: md

usaddr = Contact::UsAddress.create house: '1234', street: 'Long Street', us_city: balt, us_state: md, zipcode: 21352

addr = Contact::Address.create country: us, address: usaddr