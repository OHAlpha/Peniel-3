require 'test_helper'

class ReferenceControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get contactus" do
    get :contactus
    assert_response :success
  end

  test "should get departments" do
    get :departments
    assert_response :success
  end

  test "should get webdeveloper" do
    get :webdeveloper
    assert_response :success
  end

end
