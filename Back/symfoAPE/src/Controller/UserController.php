<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use Doctrine\Common\Annotations\Annotation;

class UserController extends AbstractController
{
    // public function encode(User $user, UserPasswordEncoderInterface $encoder)
    // {
    //     $encodedPassword = $encoder->encodePassword($user, $user->getPassword());
    //     $user->setPassword($encodedPassword);
    //     return $user;
    // }
}  
