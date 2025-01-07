<?php

namespace App\Http\Requests;

use App\Service\GenerateErrorThrowMessage;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class UserRegisterRequest extends FormRequest
{
    private array $commonRulesWithRequired = ['required', 'string', 'min:1', 'max:191'];

    private array $commonRulesWithoutRequired =  ['string', 'min:1', 'max:191'];

    private array $commonNumberRulesWithoutRequired = ['string', 'min:1', 'max:8'];

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'employeeBasicDetails' => 'required|array',
            'employeeBasicDetails.title' => $this->commonRulesWithRequired,
            'employeeBasicDetails.initials' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.first_name' => $this->commonRulesWithRequired,
            'employeeBasicDetails.middle_name' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.last_name' => $this->commonRulesWithRequired,
            'employeeBasicDetails.nickname' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.date_of_birth' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.place_of_birth' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.gender' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.marital_status' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.blood_type' =>$this->commonRulesWithoutRequired,
            'employeeBasicDetails.citizenship' => $this->commonRulesWithoutRequired,
            'employeeBasicDetails.photo' => $this->commonRulesWithoutRequired,

            'employeeBasicDetails.user_name' => $this->commonRulesWithRequired,
            'employeeBasicDetails.email' => $this->commonRulesWithRequired,
            'employeeBasicDetails.role' => ['required', 'integer', 'min:0', 'max:10'],
            'employeeBasicDetails.password' => ['required', Rules\Password::default()],


          // User residentials details
            'employeeResidentialDetails' => 'required|array',
            'employeeResidentialDetails.address_line_1' => $this->commonRulesWithoutRequired,
            'employeeResidentialDetails.address_line_2' => $this->commonRulesWithoutRequired,
            'employeeResidentialDetails.city' => $this->commonRulesWithoutRequired,
            'employeeResidentialDetails.country' => $this->commonRulesWithoutRequired,
            'employeeResidentialDetails.postal_code' => $this->commonRulesWithoutRequired,

           // User contact information
            'employeeContactDetails' => 'required|array',
            'employeeContactDetails.mobile_number' => $this->commonRulesWithoutRequired,
            'employeeContactDetails.telephone_number' => $this->commonRulesWithoutRequired,
            'employeeContactDetails.telegram_id' => $this->commonRulesWithoutRequired,
            'employeeContactDetails.email_address' => $this->commonRulesWithoutRequired,
            'employeeContactDetails.linkedin_account' => $this->commonRulesWithoutRequired,
            'employeeContactDetails.personal_website' => $this->commonRulesWithoutRequired,

            // User education details
            'employeeEducationDetails' => 'required|array',
            'employeeEducationDetails.*.category1' => $this->commonRulesWithoutRequired,
            'employeeEducationDetails.*.school1' => $this->commonRulesWithoutRequired,
            'employeeEducationDetails.*.category2' => $this->commonRulesWithoutRequired,
            'employeeEducationDetails.*.school2' => $this->commonRulesWithoutRequired,
//
//            // User government identification details
//            'epf' => $this->commonNumberRulesWithoutRequired,
//            'tax_file' => $this->commonNumberRulesWithoutRequired,
//            'tin' => $this->commonNumberRulesWithoutRequired,
//            'nic' => $this->commonNumberRulesWithoutRequired,
//            'driving_license' => $this->commonNumberRulesWithoutRequired,
//            'passport_number' => $this->commonNumberRulesWithoutRequired,
//
//            // User emegency person details
//            'name' => $this->commonRulesWithoutRequired,
//            'address' => $this->commonRulesWithoutRequired,
//            'emegerncy_person_telephone_number' => $this->commonRulesWithoutRequired,
//            'emegerncy_person_mobile_number' => $this->commonRulesWithoutRequired,
//            'emegerncy_person_email_address' => $this->commonRulesWithoutRequired,
//            'relationship' => $this->commonRulesWithoutRequired,
        ];
    }

    public function failedValidation(Validator $validator): void
    {
        GenerateErrorThrowMessage::execute($validator);
    }
}
