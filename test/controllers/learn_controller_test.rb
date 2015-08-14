require 'test_helper'

class LearnControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get bible" do
    get :bible
    assert_response :success
  end

  test "should get science" do
    get :science
    assert_response :success
  end

  test "should get health" do
    get :health
    assert_response :success
  end

end
