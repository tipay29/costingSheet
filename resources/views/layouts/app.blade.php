<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('storage/js/chart.js') }}" defer></script>
    <script src="{{ asset('storage/js/chart-label.js') }}" defer></script>
    <script src="{{ asset('storage/js/main.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-get-categories.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-get-size-color.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-construct.js') }}" defer></script>
    @if(str_contains(url()->current(), 'costing-sheet') || str_contains(url()->current(), 'edit'))
        <script src="{{ asset('storage/js/costing-show-details.js') }}" defer></script>
    @endif
    <script src="{{ asset('storage/js/costing-init.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-table-cb.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-bottom.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-formula.js') }}" defer></script>
    @if(str_contains(url()->current(), 'costing-sheet') || str_contains(url()->current(), 'create'))
        <script src="{{ asset('storage/js/costing-save.js') }}" defer></script>
    @endif
    @if(str_contains(url()->current(), 'costing-sheet') || str_contains(url()->current(), 'edit'))
        <script src="{{ asset('storage/js/costing-update.js') }}" defer></script>
    @endif
    <script src="{{ asset('storage/js/costing-show-summary.js') }}" defer></script>
    <script src="{{ asset('storage/js/costing-apply.js') }}" defer></script>




    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('storage/css/costing.css') }}" rel="stylesheet">

</head>
<body >
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ 'Horizon' }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('costing-sheets.index')}}">Costing Sheets</a>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>

</body>
</html>
