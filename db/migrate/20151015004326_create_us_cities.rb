class CreateUsCities < ActiveRecord::Migration
  def change
    create_table :contact_us_cities do |t|
      t.string :name
      t.integer :us_state_id

      t.timestamps null: false
    end
    add_foreign_key :us_cities, :us_states
  end
end
