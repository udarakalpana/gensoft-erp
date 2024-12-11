<?php

namespace App\Action\User;

use App\Models\User;
use App\Models\UserContactInformation;
use App\Models\UserResidentialDetail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use App\Service\ResponseGenerator\ResponseGenerator;

class UserRegister
{
    public function __invoke(array $validatedUserRegisterRequest): array
    {
        DB::beginTransaction();
        try {

            (new UserDetailsStore())->UserBasicDetailsStore($validatedUserRegisterRequest);

            DB::commit();

            return ResponseGenerator::sendSuccessResponse('User Registered Successfully');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollBack();
        }

        return ResponseGenerator::badResponse();
    }
}
