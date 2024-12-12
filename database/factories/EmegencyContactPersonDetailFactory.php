<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmegencyContactPersonDetail>
 */
class EmegencyContactPersonDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'address' => $this->faker->address(),
            'emegerncy_person_telephone_number' => $this->faker->phoneNumber(),
            'emegerncy_person_mobile_number' => $this->faker->phoneNumber(),
            'emegerncy_person_email_address' => $this->faker->email(),
            'relationship' => $this->faker->randomElement(['sister', 'mother', 'father']),
        ];
    }
}
