state = Contact::CountrySubdivisionType.where( name: 'state' ).first
district = Contact::CountrySubdivisionType.where( name: 'district' ).first
outlying_territory = Contact::CountrySubdivisionType.where( name: 'outlying territory' ).first

us = Contact::Country.where( alpha_2: 'US' ).first

def setSubdivision (ccod,cnom,ctyp)
  Contact::CountrySubdivision.create name: cnom, code: ccod, country: us, country_subdivision_type: ctyp
end

setSubdivision 'AL','Alabama',state
setSubdivision 'AK','Alaska',state
setSubdivision 'AZ','Arizona',state
setSubdivision 'AR','Arkansas',state
setSubdivision 'CA','California',state
setSubdivision 'CO','Colorado',state
setSubdivision 'CT','Connecticut',state
setSubdivision 'DE','Delaware',state
setSubdivision 'FL','Florida',state
setSubdivision 'GA','Georgia',state
setSubdivision 'HI','Hawaii',state
setSubdivision 'ID','Idaho',state
setSubdivision 'IL','Illinois',state
setSubdivision 'IN','Indiana',state
setSubdivision 'IA','Iowa',state
setSubdivision 'KS','Kansas',state
setSubdivision 'KY','Kentucky',state
setSubdivision 'LA','Louisiana',state
setSubdivision 'ME','Maine',state
setSubdivision 'MD','Maryland',state
setSubdivision 'MA','Massachusetts',state
setSubdivision 'MI','Michigan',state
setSubdivision 'MN','Minnesota',state
setSubdivision 'MS','Mississippi',state
setSubdivision 'MO','Missouri',state
setSubdivision 'MT','Montana',state
setSubdivision 'NE','Nebraska',state
setSubdivision 'NV','Nevada',state
setSubdivision 'NH','New Hampshire',state
setSubdivision 'NJ','New Jersey',state
setSubdivision 'NM','New Mexico',state
setSubdivision 'NY','New York',state
setSubdivision 'NC','North Carolina',state
setSubdivision 'ND',' North Dakota',state
setSubdivision 'OH','Ohio',state
setSubdivision 'OK','Oklahoma',state
setSubdivision 'OR','Oregon',state
setSubdivision 'PA','Pennsylvania',state
setSubdivision 'RI','Rhode Island',state
setSubdivision 'SC','South Carolina',state
setSubdivision 'SD','South Dakota',state
setSubdivision 'TN','Tennessee',state
setSubdivision 'TX','Texas',state
setSubdivision 'UT','Utah',state
setSubdivision 'VT','Vermont',state
setSubdivision 'VA','Virginia',state
setSubdivision 'WA','Washington',state
setSubdivision 'WV','West Virginia',state
setSubdivision 'WI','Wisconsin',state
setSubdivision 'WY','Wyoming',state
setSubdivision 'DC','District of Columbia',district
setSubdivision 'AS','American Samoa',outlying_territory
setSubdivision 'GU','Guam',outlying_territory
setSubdivision 'MP','Northern Mariana Islands',outlying_territory
setSubdivision 'PR','Puerto Rico',outlying_territory
setSubdivision 'UM','United States Minor Outlying Islands',outlying_territory
setSubdivision 'VI','Virgin Islands, U.S.',outlying_territory
