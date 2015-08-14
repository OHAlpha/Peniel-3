require 'test_helper'

class AccountControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get register" do
    get :register
    assert_response :success
  end

  test "should get login" do
    get :login
    assert_response :success
  end

  test "should get logout" do
    get :logout
    assert_response :success
  end

  test "should get leave" do
    get :leave
    assert_response :success
  end

  test "should get settings" do
    get :settings
    assert_response :success
  end

end
