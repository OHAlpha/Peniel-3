province = Contact::CountrySubdivisionType.where( name: 'province').first
territory = Contact::CountrySubdivisionType.where( name: 'territory').first

ca = Contact::Country.where( alpha_2: 'CA').first

def setSubdivision (ccod,cnom,cfnom,ctyp)
  Contact::CountrySubdivision.create name: cnom, code: ccod, country: ca, country_subdivision_type: ctyp
end

setSubdivision 'AB','Alberta','Alberta',province
setSubdivision 'BC','British Columbia','Colombie-Britannique',province
setSubdivision 'MB','Manitoba','Manitoba',province
setSubdivision 'NB','New Brunswick','Nouveau-Brunswick',province
setSubdivision 'NL','Newfoundland and Labrador','Terre-Neuve-et-Labrador',province
setSubdivision 'NS','Nova Scotia','Nouvelle-Écosse',province
setSubdivision 'ON','Ontario','Ontario',province
setSubdivision 'PE','Prince Edward Island','Île-du-Prince-Édouard',province
setSubdivision 'QC','Quebec','Québec',province
setSubdivision 'SK','Saskatchewan','Saskatchewan',province
setSubdivision 'NT','Northwest Territories','Territoires du Nord-Ouest',territory
setSubdivision 'NU','Nunavut','Nunavut',territory
setSubdivision 'YT','Yukon','Yukon',territory