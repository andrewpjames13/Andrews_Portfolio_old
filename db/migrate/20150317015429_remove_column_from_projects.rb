class RemoveColumnFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :hero_image, :binary
  end
end
