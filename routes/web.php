<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

// Función para establecer el idioma basado en la sesión o usar el predeterminado
function setLocaleFromSession() {
    $locale = Session::get('locale', 'en');
    App::setLocale($locale);
    return $locale;
}

// Ruta para cambiar el idioma
Route::get('/language/{locale}', function ($locale) {
    
    if (in_array($locale, ['en', 'pt_BR'])) {
        Session::put('locale', $locale);
    }
    return redirect()->back();
})->name('language.switch');

// Nossa nova página de portfólio como rota principal
Route::get('/', function () {
    $locale = setLocaleFromSession();

    return Inertia::render('PortfolioHome', [
        'heroDescription' => __('hero.description'),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'currentLocale' => $locale,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
