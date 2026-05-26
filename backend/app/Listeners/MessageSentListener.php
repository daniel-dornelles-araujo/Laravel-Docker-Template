<?php

declare(strict_types=1);

namespace App\Listeners;

use Illuminate\Mail\Events\MessageSent;
use Illuminate\Support\Facades\Log;

class MessageSentListener
{
    /**
     * Handle the event.
     */
    public function handle(MessageSent $event)
    {
        // Access the underlying Symfony Message object
        $message = $event->message;

        // Example: Log the message ID
        Log::info('Message sent with ID: ' . $message->getHeaders()->get('Message-ID'));
    }
}
