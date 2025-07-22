<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubmitMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    // Just set subject, no replyTo
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Message'
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.submit-message'
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

