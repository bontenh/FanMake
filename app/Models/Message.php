<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $table = 'message';
    protected $fillable=['message'];
    protected $guarded=['id'];

    public function index(){
        $order_table = Message::all();
        return $order_table;
    }

    public function store($request){
        $message = Message::create(['message' => $request["message"]]);
        return $message;
    }
}
