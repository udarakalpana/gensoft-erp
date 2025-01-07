<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserEducationDetails>
 */
class UserEducationDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category1' => $this->faker->randomElement(['primary', 'secondary', 'tertiary', 'higher']),
            'school1' => $this->faker->company(),
            'category2' => $this->faker->randomElement(['primary', 'secondary', 'tertiary', 'higher']),
            'school2' => $this->faker->company(),
        ];
    }
}
