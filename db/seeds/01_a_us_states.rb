state = 0
district = 1

def createState (snom,scod,styp)
  Contact::UsState.create name: snom, code: scod
end

createState 'Alabama', 'AL', state
createState 'Alaska', 'AK', state
createState 'Arizona', 'AZ', state
createState 'Arkansas', 'AR', state
createState 'California', 'CA', state
createState 'Colorado', 'CO', state
createState 'Connecticut', 'CT', state
createState 'Delaware', 'DE', state
createState 'Florida', 'FL', state
createState 'Georgia', 'GA', state
createState 'Hawaii', 'HI', state
createState 'Idaho', 'ID', state
createState 'Illinois', 'IL', state
createState 'Indiana', 'IN', state
createState 'Iowa', 'IA', state
createState 'Kansas', 'KS', state
createState 'Kentucky', 'KY', state
createState 'Louisiana', 'LA', state
createState 'Maine', 'ME', state
createState 'Maryland', 'MD', state
createState 'Massachusetts', 'MA', state
createState 'Michigan', 'MI', state
createState 'Minnesota', 'MN', state
createState 'Mississippi', 'MS', state
createState 'Missouri', 'MO', state
createState 'Montana', 'MT', state
createState 'Nebraska', 'NE', state
createState 'Nevada', 'NV', state
createState 'New Hampshire', 'NH', state
createState 'New Jersey', 'NJ', state
createState 'New Mexico', 'NM', state
createState 'New York', 'NY', state
createState 'North Carolina', 'NC', state
createState 'North Dakota', 'ND', state
createState 'Ohio', 'OH', state
createState 'Oklahoma', 'OK', state
createState 'Oregon', 'OR', state
createState 'Pennsylvania', 'PA', state
createState 'Rhode Island', 'RI', state
createState 'South Carolina', 'SC', state
createState 'South Dakota', 'SD', state
createState 'Tennessee', 'TN', state
createState 'Texas', 'TX', state
createState 'Utah', 'UT', state
createState 'Vermont', 'VT', state
createState 'Virginia', 'VA', state
createState 'Washington', 'WA', state
createState 'West Virgina', 'WV', state
createState 'Wisconsin', 'WI', state
createState 'Wyoming', 'WY', state
createState 'Distict of Columbia', 'DC', district