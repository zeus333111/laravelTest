<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('test-chanel', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
