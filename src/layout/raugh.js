try 1. 

  <Link
    to={
      isAdmin
        ? "/dashboard/adminhome"
        : isInstructor
        ? "/dashboard/instructornhome"
        : user
        "/dashboard/userhome"
    }
    onClick={() =>
      !isAdmin && !isInstructor && navigate("/dashboard/userhome")
    }
  >
    Dashboard
  </Link>