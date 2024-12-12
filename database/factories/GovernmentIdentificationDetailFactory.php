<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GovernmentIdentificationDetail>
 */
class GovernmentIdentificationDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'epf' => $this->faker->unique()->ean8(),
            'tax_file' => $this->faker->unique()->ean8(),
            'tin' => $this->faker->unique()->ean8(),
            'nic' => $this->faker->unique()->ean8(),
            'driving_license' => $this->faker->unique()->ean8(),
            'passport_number' => $this->faker->unique()->ean8(),
        ];
    }
}
