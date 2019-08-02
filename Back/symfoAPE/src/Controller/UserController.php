<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    /**
     * @Route("/admin/users", name="user_list")
     */
    public function list(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        return $this->json($users);
    }

    /**
     * @Route("/profile/user/{id}", name="user_show", methods={"GET"}))
     */
    public function show(User $user)
    {
        if (empty($user)) {
            return new JsonResponse(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($user);
    }

    /**
     * @Route("/admin/user/create", name="user_create")
     * @Route("/profil/user/{id}/edit", name="user_edit")
     */

    /**
     * @Route("/admin/user/{id}/delete", name="user_delete")
     */
}
