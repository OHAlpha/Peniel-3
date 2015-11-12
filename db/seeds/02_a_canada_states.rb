@province = 0
@territory = 1

def createProvince (pnom,pcod,ptyp)
  Contact::CanadaProvince.create name: pnom, code: pcod
end

createProvince 'Alberta', 'AB', @province
createProvince 'British Columbia', 'BC', @province
createProvince 'Manitoba', 'MB', @province
createProvince 'New Brunswick', 'NB', @province
createProvince 'Newfoundland and Labrador', 'NL', @province
createProvince 'Nova Scotia', 'NS', @province
createProvince 'Ontario', 'ON', @province
createProvince 'Prince Edward Island', 'PE', @province
createProvince 'Quebec', 'QC', @province
createProvince 'Saskatchewan', 'SK', @province
createProvince 'Northwest Territories', 'NT', @territory
createProvince 'Yukon', 'YT', @territory
createProvince 'Nunavut', 'NU', @territory
