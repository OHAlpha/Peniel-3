require 'test_helper'

class ResourcesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get media" do
    get :media
    assert_response :success
  end

  test "should get store" do
    get :store
    assert_response :success
  end

  test "should get games" do
    get :games
    assert_response :success
  end

  test "should get links" do
    get :links
    assert_response :success
  end

end
