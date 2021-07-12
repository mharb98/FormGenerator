class CreateForms < ActiveRecord::Migration[6.1]
  def change
    create_table :forms do |t|
      t.text :formTitle
      t.text :img
      t.text :description
      t.text :email
      t.text :jobTitle
      t.text :bestTime
      t.text :propertyType

      t.timestamps
    end
  end
end
