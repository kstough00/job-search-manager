class CreatePositions < ActiveRecord::Migration[6.0]
  def change
    create_table :positions do |t|
      t.string :title
      t.integer :salary
      t.string :company

      t.timestamps
    end
  end
end
