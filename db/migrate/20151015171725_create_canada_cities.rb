class CreateCanadaCities < ActiveRecord::Migration
  def change
    create_table :contact_canada_cities do |t|
      t.string :name
      t.belongs_to :canada_state, index: true

      t.timestamps null: false
    end
  end
end
